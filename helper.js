// Helper functions for creating classes for Leetcode problems
module.exports = {

  SinglyLinkedListNode: function (val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  },
  BinaryTreeNode: function (val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

}
