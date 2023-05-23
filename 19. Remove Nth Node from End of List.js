/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/*
  I: head, nth number from end
  O: head
  C:
  E:
    - if we don't have n entered, just return whole list?

  Strategy:
    - maintain a "counter" and "remove" variable tracking number of nodes, and which node would be removed
    - once we reach end of linked list, we are able to make the actual change
    - unattach from current linked list and tie up prev and next
*/


var removeNthFromEnd = function(head, n) {
  let count = 0
  let remove = null
  let node = head

  while (node.next) {
    count++

    // when count reaches n for first time, set it equal to the head
    if (count === n) {
      remove = head
    } else if (count > n) {
      remove = remove.next
    }
    node = node.next

  }

  // now we've reached the end and have the node to remove, so tie everything back together
  if (count === 0) {
    head = null
  } else if (!remove) { // if we never flagged a node to remove, then remove the head
    head = head.next
  } else {
    remove.next = remove.next.next
  }
  return head

};


// === TESTING ===
let ListNode = require('./helper.js').SinglyLinkedListNode


let node8 = new ListNode(8)

let node7 = new ListNode(7)
let node6 = new ListNode(6)
node6.next = node7


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

// console.log(removeNthFromEnd(node1, 2))
console.log(removeNthFromEnd(node6, 1))
console.log(removeNthFromEnd(node8, 1))