const ListNode = require('./helper').ListNode
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

/*
  I: head of linked list
  O: boolean
  C: try and do it in constant time...
  E:

  Strategy:
    - are values unique? sounds like no, in which case we couldn't stringify and save in an object
    - could just change node value, but would need some sort of unique string
*/
var hasCycle = function(head) {
  while (head) {

    if (head.val === 'checked') {
      return true
    }

    head.val = 'checked'
    head = head.next
  }
  return false
};

// ==== TESTING ====
let list1 = new ListNode(3)
let list2 = new ListNode(2)
let list3 = new ListNode(0)
let list4 = new ListNode(-4)
list1.next = list2
list2.next = list3
list3.next = list4
list4.next = list2

console.log(hasCycle(list1))