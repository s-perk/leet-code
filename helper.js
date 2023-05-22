// Helper functions for creating classes for Leetcode problems
module.exports = {

  ListNode: function (val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}
