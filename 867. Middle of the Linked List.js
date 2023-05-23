/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
  I: linked list node
  O: node which is the middle
  C:
  E:
    - if two middle, return second one
*/
var middleNode = function(head) {
  let count = 0
  let middle = head
  let node = head

  while (node.next) {

    // middle moves forward by 1 every time we hit an even number of nodes
    if (count % 2 === 0) {
      middle = middle.next || head
    }

    count++
    node = node.next
  }

  return middle
};

let ListNode = require('./helper.js').SinglyLinkedListNode

// === TESTING ===
let node8 = new ListNode(8)
let node7 = new ListNode(7)
let node6 = new ListNode(6)
let node5 = new ListNode(5)
node5.next = node6
let node4 = new ListNode(4)
node4.next = node5
let node3 = new ListNode(3)
node3.next = node4
let node2 = new ListNode(2)
node2.next = node3
let node1 = new ListNode(1)
node1.next = node2

console.log(middleNode(node1))