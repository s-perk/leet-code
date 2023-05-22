const ListNode = require('./helper.js').ListNode
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

/*
  I: head (node) of linked list
  O: new head
  C:
  E:

  Strategy:
    1. Use a stack - just push onto an array and pop back off
    2. Track a boolean which will tell us to alternate back and forth between removing from front or back
*/
var reorderList = function(head) {
  let even = false // boolean to track whether we have an even or odd (start on #1 after head)
  let stack = []
  let node = head

  // Create stack
  while (node) {
    stack.push(node)
    node = node.next
  }

  // Create new list
  node = stack.shift() // this should just be the head to start us off
  while (stack.length > 0) {
    node.next = (even) ? stack.shift() : stack.pop()
    even = !even
    node = node.next
  }
  node.next = null // reset final node to null

  return head
};




//Input: list1 = [1,2,3,4,5]
//Output: [1,5,2,4,3]

let list1 = new ListNode(1,
  new ListNode(2,
    new ListNode(3,
      new ListNode(4,
        new ListNode(5
  )))))

reorderList(list1)
