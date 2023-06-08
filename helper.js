// Helper functions for creating classes for Leetcode problems
const methods = {

  SinglyLinkedListNode: function (val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  },
  BinaryTreeNode: function (val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  },
  GraphNode: function (val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  },
  buildBinaryTreeFromArray: function(array) {
    // Creating two queues
    //  1. array - input with values
    //  2. queue - contains previous level nodes (parents) so we can add to it

    // BFS to create tree from array
    let queue = []
    let parent = null
    let root = null

    // We'll pop values off array until we have none left
    while (array.length > 0) {

      // Root won't have a parent, so set it as parent and return
      if (!parent) {
        parent = new methods.BinaryTreeNode(array.shift())
        queue.push(parent)
        root = parent
      }

      // Evaluate queue to add new nodes
      let qLen = queue.length
      for (var i = 0; i < qLen*2; i+=2) {
        // Sometimes we don't have a complete final row, so quit early if no values left
        if (array.length === 0) {
          break
        }

        // Parent can't be null, so pop off until we find one with a value
        parent = queue.pop()
        while (parent === null) {
          parent = queue.pop()
          i++
        }

        // next two values are the children, so pop them off and add to parent
        let left = array.shift()
        let right = array.shift()
        parent.left = (left !== null) ? new methods.BinaryTreeNode(left) : null
        parent.right = (right !== null) ? new methods.BinaryTreeNode(right) : null

        queue.unshift(parent.left)
        queue.unshift(parent.right)
      }
    }

    return root
  }

};

module.exports = methods;